# frozen_string_literal: true

include Helpers::ModuleHelper

def init
  sections :raw_docstring
end

def raw_docstring
  object.docstring
end
