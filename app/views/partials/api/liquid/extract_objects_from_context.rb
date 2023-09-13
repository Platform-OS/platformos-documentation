#!/usr/bin/env ruby

require 'json'

def extract(objects, node, parent_name = nil)
  node.each do |k, v|
    next if !v.is_a?(Hash)

    type_name = v.class.name.downcase
    properties = []
    if v.is_a?(Hash)
      properties = v.map { |kk, vv|
        property_type = vv.class.name.downcase
        property_type = 'number' if vv.is_a?(Numeric)
        property_type = kk if vv.is_a?(Hash)
        { name: kk, type: property_type }
      }
    end
    objects << { name: k, type: type_name, parent: parent_name, properties: properties, global: parent_name.nil? }
    objects = extract(objects, v, k) if v.is_a?(Hash)
  end

  objects
end

context = JSON.parse(File.read('context.json'))
data = extract([], context)

File.write('objects_json.liquid', JSON.dump(data))
puts data
