class JsonWebToken
    class << self
        #Takes 3 params, user ID, exp time, and unique base key
        def encode(payload, exp = 24.hours.from_now)
            payload[:exp] = exp.to_i
            JWT.encode(payload, Rails.application.secrets.secret_key_base, 'HS256', { type: 'JWT'})
        end

        # takes token and uses secret key to decode
        def decode(token)
            body = JWT.decode(token, Rails.application.secrets.secret_key_base)[0]
            HashWithIndifferentAccess.new body
        rescue
            nil
        end
    end
end