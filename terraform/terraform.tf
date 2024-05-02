terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "=3.99.0"
    }
  }
  backend "azurerm" {
    resource_group_name = "do-not-delete"
  }
}

provider "azurerm" {
  features {}
  skip_provider_registration = true
  subscription_id            = var.azure_subscription_id
  client_id                  = var.spn_client_id
  client_secret              = var.spn_client_secret
  tenant_id                  = var.azure_tenant_id
}
