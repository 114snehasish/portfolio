output "secret_created_at" {
  value = github_actions_secret.api_key.created_at
}

output "secret_updated_at" {
  value = github_actions_secret.api_key.updated_at
}