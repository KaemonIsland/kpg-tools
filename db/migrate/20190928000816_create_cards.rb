class CreateCards < ActiveRecord::Migration[6.0]
  def change
    create_table :cards do |t|
      t.integer :baseSetSize
      t.string :block
      t.string :code, index: true
      t.boolean :isPartialPreview
      t.string :keyruneCode
      t.string :mcmName
      t.integer :setMcmId
      t.string :meta
      t.string :mtgoCode
      t.string :setName
      t.string :parentCode
      t.string :releaseDate
      t.integer :tcgplayerGroupId
      t.integer :totalSetSize
      t.string :setType
      t.string :artist
      t.string :borderColor
      t.string :colorIdentity
      t.string :colorIndicator
      t.string :colors
      t.float :convertedManaCost
      t.float :faceConvertedManaCost
      t.string :flavorText
      t.string :frameEffect
      t.string :frameVersion
      t.boolean :isAlternative
      t.boolean :isArena
      t.boolean :isFullArt
      t.boolean :isPromo
      t.boolean :isReprint
      t.boolean :isReserved
      t.string :layout
      t.string :leadershipSkills
      t.string :legalities
      t.string :life
      t.string :loyalty
      t.string :manaCost
      t.string :mtgstocksId
      t.integer :mcmId
      t.integer :mcmMetaId
      t.integer :mtgArenaId
      t.integer :multiverseId
      t.string :name, index: true
      t.string :names
      t.string :number
      t.string :originalText
      t.string :originalType
      t.string :power
      t.string :prices
      t.string :printings
      t.string :purchaseUrls
      t.string :rarity
      t.string :reverseRelated
      t.string :rulings
      t.string :scryfallId
      t.string :scryfallOracleId
      t.string :scryfallIllustrationId
      t.string :side
      t.string :subtypes
      t.string :supertypes
      t.integer :tcgplayerProductId
      t.string :text
      t.string :toughness
      t.string :cardType, index: true
      t.string :types
      t.string :uuid, index: true
      t.string :variations
      t.string :watermark

      t.timestamps
    end
  end
end
