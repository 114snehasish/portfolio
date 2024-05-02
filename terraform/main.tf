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

