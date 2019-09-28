# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_09_28_000816) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cards", force: :cascade do |t|
    t.integer "baseSetSize"
    t.string "block"
    t.string "code"
    t.boolean "isPartialPreview"
    t.string "keyruneCode"
    t.string "mcmName"
    t.integer "setMcmId"
    t.string "meta"
    t.string "mtgoCode"
    t.string "setName"
    t.string "parentCode"
    t.string "releaseDate"
    t.integer "tcgplayerGroupId"
    t.integer "totalSetSize"
    t.string "setType"
    t.string "artist"
    t.string "borderColor"
    t.string "colorIdentity"
    t.string "colorIndicator"
    t.string "colors"
    t.float "convertedManaCost"
    t.float "faceConvertedManaCost"
    t.string "flavorText"
    t.string "frameEffect"
    t.string "frameVersion"
    t.boolean "isAlternative"
    t.boolean "isArena"
    t.boolean "isFullArt"
    t.boolean "isPromo"
    t.boolean "isReprint"
    t.boolean "isReserved"
    t.string "layout"
    t.string "leadershipSkills"
    t.string "legalities"
    t.string "life"
    t.string "loyalty"
    t.string "manaCost"
    t.string "mtgstocksId"
    t.integer "mcmId"
    t.integer "mcmMetaId"
    t.integer "mtgArenaId"
    t.integer "multiverseId"
    t.string "name"
    t.string "names"
    t.string "number"
    t.string "originalText"
    t.string "originalType"
    t.string "power"
    t.string "prices"
    t.string "printings"
    t.string "purchaseUrls"
    t.string "rarity"
    t.string "reverseRelated"
    t.string "rulings"
    t.string "scryfallId"
    t.string "scryfallOracleId"
    t.string "scryfallIllustrationId"
    t.string "side"
    t.string "subtypes"
    t.string "supertypes"
    t.integer "tcgplayerProductId"
    t.string "text"
    t.string "toughness"
    t.string "cardType"
    t.string "types"
    t.string "uuid"
    t.string "variations"
    t.string "watermark"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["cardType"], name: "index_cards_on_cardType"
    t.index ["code"], name: "index_cards_on_code"
    t.index ["name"], name: "index_cards_on_name"
    t.index ["uuid"], name: "index_cards_on_uuid"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.boolean "admin", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
