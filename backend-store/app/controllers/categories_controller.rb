class CategoriesController < ApplicationController
    def index
        categories = Category.all 
        # render json: categories.to_json(include: {items: {only: [:name, :description, :price]}}, only: :name)
        render json: CategorySerializer.new(categories, {include: [:items]})
    end 
    
    def show
        category = Category.find(params[:id])
        render json: CategorySerializer.new(category)
    end 

end
