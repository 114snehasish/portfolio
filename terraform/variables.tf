variable azure_subscription_id {
  type        = string
  description = "The Azure subscription"
}

variable spn_client_id {
  type        = string
  description = "The Azure service principal app ID"
}

variable spn_client_secret {
  type        = string
  description = "The Azure service principal key"
}

variable azure_tenant_id {
  type        = string
  description = "The Azure tenant ID"
}

variable github_pat {
  type        = string
  description = "The GitHub personal access token"
}