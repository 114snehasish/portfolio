output "api_token" {
  value = nonsensitive(azurerm_static_web_app.portfolio.api_key)
}