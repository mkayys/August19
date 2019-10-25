class Api::TodosController < ApplicationController

    def index
    end

    def destroy
    end
    
    def show
        @todo = Todo.find(params[:id])
        render json: @todo
    end

    def create
        @todo = Todo.new(todo_params)
        if @todo.save
            render json: @todo
        else
            render json: @todo.errors.full_messages, status: 422
        end
    end

    private

    def todo_params
        params.require(:todo).permit(:title, :body, :done)
    end

end
