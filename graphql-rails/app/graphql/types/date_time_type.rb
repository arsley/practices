module Types
  class DateTimeType < Types::BaseScalar
    def self.cerce_input(value, _context)
      Time.zone.parse(value)
    end

    def self.cerce_result(value, _context)
      value.utc.iso8601
    end
  end
end
