# -*- encoding: utf-8 -*-
# stub: jekyll-theme-console 0.3.10 ruby lib

Gem::Specification.new do |s|
  s.name = "jekyll-theme-console".freeze
  s.version = "0.3.10"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["b2a3e8".freeze]
  s.date = "2020-07-04"
  s.email = ["31370519+b2a3e8@users.noreply.github.com".freeze]
  s.homepage = "https://github.com/b2a3e8/jekyll-theme-console".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.1.3".freeze
  s.summary = "A jekyll theme with inspiration from linux consoles for hackers, developers and script kiddies.".freeze

  s.installed_by_version = "3.1.3" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_runtime_dependency(%q<jekyll>.freeze, [">= 3.5"])
    s.add_runtime_dependency(%q<jekyll-seo-tag>.freeze, [">= 0"])
    s.add_development_dependency(%q<bundler>.freeze, [">= 0"])
    s.add_development_dependency(%q<rake>.freeze, [">= 0"])
  else
    s.add_dependency(%q<jekyll>.freeze, [">= 3.5"])
    s.add_dependency(%q<jekyll-seo-tag>.freeze, [">= 0"])
    s.add_dependency(%q<bundler>.freeze, [">= 0"])
    s.add_dependency(%q<rake>.freeze, [">= 0"])
  end
end
