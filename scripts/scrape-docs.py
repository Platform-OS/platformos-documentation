#!/usr/bin/env python3

import os
import scrapy
from w3lib.html import remove_tags, replace_escape_chars
from urlparse import urlparse

host = os.getenv("MP_URL")

class PlatformOSDocumentationSpider(scrapy.Spider):
    name = 'stackoverflow'
    start_urls = [
      host + '/api-reference',
      host + '/get-started',
      host + '/tutorials',
      host + '/how-platformos-works',
      host + '/use-cases',
      host + '/best-practices',
      host + '/community/contributor-guide'
    ]

    def parse(self, response):
      for href in response.css('.nav-sidebar a::attr(href)'):
        full_url = response.urljoin(href.extract())
        yield scrapy.Request(full_url, callback=self.parse_page)

    def parse_page(self, response):
      if not response.css('.content__main'):
        return

      body = response.xpath("normalize-space(//*[contains(@class, 'content__main')])").get()
      description = response.css("html meta[name='description']::attr(content)").get()
      slug = urlparse(response.url).path
      yield {
        'id': str(hash(slug)),
        'type_name': 'document',
        'properties': {
          'slug': slug,
          'title': response.css('.content__main h1::text').get(),
          'body': replace_escape_chars(remove_tags(body)),
          'description': replace_escape_chars(remove_tags(description))
        }
      }
