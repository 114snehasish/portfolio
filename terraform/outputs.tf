output "static_site_url" {
  value = azurerm_static_web_app.portfolio.default_host_name
}
output "secret_created_at" {
  value = github_actions_secret.api_key.created_at
}

output "secret_updated_at" {
  value = github_actions_secret.api_key.updated_at
}