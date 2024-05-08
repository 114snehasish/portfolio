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

