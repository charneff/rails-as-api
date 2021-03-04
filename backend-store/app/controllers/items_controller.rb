class ItemsController < ApplicationController

    def index
        items = Item.all 
        options = {include: [:category]}
        render json: ItemSerializer.new(items, options)
    end

    def show 
        item = Item.find(params[:id])
        options = {include: [:category]}
        render json: ItemSerializer.new(item, options)
    end 

end
