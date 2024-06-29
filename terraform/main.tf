# Create a resource group
resource "azurerm_resource_group" "portfolio-rg" {
  name     = "portfolio-rg"
  location = "East US 2"
}

# Create a Static Web App
resource "azurerm_static_web_app" "portfolio" {
  name                = "portfolio"
  resource_group_name = azurerm_resource_group.portfolio-rg.name
  location            = azurerm_resource_group.portfolio-rg.location
}

# Create a Github Secret for the generated api_key
resource "github_actions_secret" "api_key" {
  repository      = "portfolio"
  secret_name     = "AZURE_STATIC_WEB_APPS_API_TOKEN"
  plaintext_value = azurerm_static_web_app.portfolio.api_key
}

# Create a Cloudflare DNS record for the custom domain
resource "cloudflare_record" "portfolio" {
  zone_id = var.cf_zone_id
  name    = "portfolio-dev"
  type    = "CNAME"
  value   = azurerm_static_web_app.portfolio.default_host_name
  ttl     = 1
  proxied = false
}

# Delay to allow DNS propagation
resource "time_sleep" "wait_60_seconds" {
  depends_on      = [cloudflare_record.portfolio]
  create_duration = "60s"
}

# Create a custom domain for the Static Web App
resource "azurerm_static_web_app_custom_domain" "portfolio" {
  count = try(1, 0)

  static_web_app_id = azurerm_static_web_app.portfolio.id
  domain_name       = "portfolio-dev.snehasish-chakraborty.com"
  validation_type   = "cname-delegation"
  depends_on        = [time_sleep.wait_60_seconds]
}

# Retry creating the custom domain if the first attempt fails
resource "azurerm_static_web_app_custom_domain" "portfolio_retry" {
  count = try(0, 1)

  static_web_app_id = azurerm_static_web_app.portfolio.id
  domain_name       = "portfolio-dev.snehasish-chakraborty.com"
  validation_type   = "cname-delegation"
  depends_on        = [azurerm_static_web_app_custom_domain.portfolio]
}

