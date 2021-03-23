class ItemSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :price, :description, :id
  belongs_to :category
end
