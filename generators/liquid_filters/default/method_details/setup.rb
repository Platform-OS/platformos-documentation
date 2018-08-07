# frozen_string_literal: true
def init
  sections :method_signature, :raw_docstring
end

def raw_docstring
  erb(:raw_docstring)
end
