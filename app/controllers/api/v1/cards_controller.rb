class Api::V1::CardsController < ApplicationController
  before_action :set_card, only: [:show, :update, :destroy]
  skip_before_action :authenticate_request, only: [:index, :show]
  # Get api/v1/cards
  def index 
      @cards = Card.all
      json_response(@cards)
  end

  # GET api/v1/cards/:id
  def show
      json_response(@card)
  end

  # POST api/v1/cards
  def create
    if current_user.admin?
      @card = Card.create!(card_params)
      json_response(@card, :created)
    else
      render json: { error: 'You must be admin to make this request' }, status: 401
    end
  end

  # PUT api/v1/cards/:id
  def update
      @card.update(card_params)
      head :no_content
  end

  # DELETE api/v1/cards/:id
  def destroy
      @card.destroy
      head :no_content
  end

  private

    def set_card
      @card = Card.find(params[:id])
    end

    def card_params
      params.require(:card).permit(
        :baseSetSize,
        :block,
        :code,
        :isPartialPreview,
        :keyruneCode,
        :mcmName,
        :setMcmId,
        :meta,
        :mtgoCode,
        :setName,
        :parentCode,
        :releaseDate,
        :tcgplayerGroupId,
        :totalSetSize,
        :setType,
        :artist,
        :borderColor,
        :colorIdentity,
        :colorIndicator,
        :colors,
        :convertedManaCost,
        :faceConvertedManaCost,
        :flavorText,
        :frameEffect,
        :frameVersion,
        :isAlternative,
        :isArena,
        :isFullArt,
        :isPromo,
        :isReprint,
        :isReserved,
        :layout,
        :leadershipSkills,
        :legalities,
        :life,
        :loyalty,
        :manaCost,
        :mtgstocksId,
        :mcmId,
        :mcmMetaId,
        :mtgArenaId,
        :multiverseId,
        :name,
        :names,
        :number,
        :originalText,
        :originalType,
        :power,
        :prices,
        :printings,
        :purchaseUrls,
        :rarity,
        :reverseRelated,
        :rulings,
        :scryfallId,
        :scryfallOracleId,
        :scryfallIllustrationId,
        :side,
        :subtypes,
        :supertypes,
        :tcgplayerProductId,
        :text,
        :toughness,
        :cardType,
        :types,
        :uuid,
        :variations,
        :watermark
      )
    end
end
