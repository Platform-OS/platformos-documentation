---
converter: markdown
metadata:
  title: Adding your Subdomain to a platformOS Instance
  description: 
---

Adding your Subdomain to a platformOS Instance

Domains: Subdomain (https://123.example.com or https://www.123.example.com)
DNS Service: platformOS DNS Service

-This article will show you how to add your Subdomain to a platformOS instance. The default workflow includes creation of a www CNAME record and the creation and application of an SSL certificate as well as redirects from the subdomain to the www subdomain. If you want to resolve to the subdomain instead of the www subdomain, there are additional steps at the bottom of the article (B.14 - B.19) that will assist with that.

I. Copy current DNS Files for later use.

    B.1. If this subdomain currently has DNS records, you want to export your zone file with those subdomain records for use later. If this is a brand new subdomain, go to next step.
    
II. Add the subdomain to your platformOS instance.

-This step will add the subdomain and create a platformOS Hosted Zone for your DNS records. Note, this is all happening 'offline' so nothing is affecting the current URL or DNS records at this time.

    B.2. Go to https://partners.platformos.com/, Log in, Navigate to your instance detail.
    B.3. Click “Domains”.
    B.4. Click “Add new domain to your instance”.
    B.5. Click "DNS Zone".
    B.6. Add your subdomain (do not include www), will this be your default domain, Click “Create DNS Zone”.
    
III. Add DNS records

-This step is add the DNS records to your newly created platformOS Hosted Zone so that when you update the nameservers to 'go live' there is no delay in services (email, etc). Note, this is all happening 'offline' so nothing is affecting the current URL or DNS records at this time.

	B.7. From the Domains page, you'll want to refresh the page until the status of new domain changes to "reparking_domain". This normally only takes a few seconds.
	B.8. Click “view”.
    B.9. Now, you will want to add ALL of your DNS records to the newly created DNS Zone by clicking "add additional record" to add each new record. When you have added all of your records, Click “Confirm DNS Changes”. (click here for more information on indivual records)
    
IV. LAUNCH!

-This step is the moment of truth. We will add the nameservers to the root domains DNS. Once you update the nameservers the process is started and your domain will point to the platformOS instance, create and apply your SSL certificate and your platformOS DNS Hosted Zone records will be live. Our example uses Godaddy, so your domain registrar may be slightly different.

    B.10. In your root domain's DNS records, add a nameserver(ns) record for the subdomain with the values provided in the platformOS DNS Zone page. (If the root domain is hosted on platformOS, then you will click 'update' and then click "Commit DNS Changes", it may be different on other DNS services.)
    B.11. Depending on how quickly the nameserver changes propagate, (from a few minutes, to a few hours), you may have to  click 'I have changed Name Servers" a few times or refresh the page a few times. Do not be concerned if some of the records you created in the hosted zone fluctuate in the first minute or so after you update the nameservers.
    B.12. Once the Hosted Zone recognizes the change in nameservers, the status for all your records should be "OK". Your domain / DNS records and SSL certificate are all now LIVE.

IV. To www or not www.

-B.13. If you want the final resolved URL to be https://www.123.example.com then you are all finished. If you decide that the sub domain (https://123.example.com) is needed, please follow along these last few steps below.


    B.14. The defaul process described above creates a CNAME record for the www subdomain and also adds a redirect from the subdomain to the www subdomain. We need to remove the redirect and add a new one from the www subdomain to the subdomain domain. From the domain page, click 'Domains'.
    B.15. We will improve this shortly, but for now, in the URL that appears, remove the /pp_dns. Example, https://partners.platformos.com/instances/5253/pp_dns/domains we would change to https://partners.platformos.com/instances/5253/domains - From this page, we will remove the redirect from root to www, and add a redirect from www to root. Click 'Edit' on the sub domain.
    B.16. Make sure that "Use as default" is checked and that "redirect" is unchecked. Then click "Update Domain".
    B.17. Next, click on "edit" for the www subdomain.
    B.18. Finally, make sure 'Use as default' is unchecked and check "redirect". Add the direct URL to the subdomain and then choose your redirect code. Once completed, click "Update Domain".
    B.19. Congratulations! Your domain is now LIVE! And the SSL certificate has been created and applied to your instance.







