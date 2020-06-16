---
converter: markdown
metadata: 
  title: Adding Your Domain to a platformOS Instance
  description: This guide will show you how to add your domain to a platformOS Instance.
---

This guide will show you how to add your domain to a platformOS Instance. The default workflow includes the following:

* the creation of a www CNAME record
* the creation and application of an SSL certificate 
* redirects from the root domain to the www subdomain

If you want to resolve to the root instead of the www subdomain, there are additional steps at the bottom of the article () that will assist with that.

**Domains: Root (https://example.com or https://www.example.com)**  
**DNS Service: platformOS DNS Service**

## Steps

<div data-autosteps></div>

### Step 1: Copy current DNS Files for later use

Get your DNS files and set them aside so we can use them later on when we recreate the records in your platformOS Hosted Zone.

1. Sign into your domain registrar, we’ll use Godaddy as for our example.
2. Navigate to your DNS page for the domain you are adding to the platformOS Instance.
3. Scroll to the bottom of the page and Export your Zone File.

### Step 2: Add the domain to your platformOS Instance

Add the domain and create a platformOS Hosted Zone for your DNS records. Note, this is all happening 'offline' so nothing is affecting the current URL or DNS records at this time.

1. Go to https://partners.platformos.com/, Log in, and navigate to your Instance detail page.
2. Click “Domains”.
3. Click “Add new domain to your Instance”.
4. Since you are choosing to use platformOS DNS, Click “DNS Zone”. 
5. Add your ROOT domain name (do not add www), will this be your default domain, Click “Create DNS Zone”.

### Step 3: Add DNS records

Add the DNS records to your newly created platformOS Hosted Zone so that when you update the nameservers to 'go live' there is no delay in services (email, etc). Note, this is all happening 'offline' so nothing is affecting the current URL or DNS records at this time.

1. From the Domains page, you'll want to refresh the page until the status of new domain changes to "reparking_domain". This normally only takes a few seconds.
2. Click “view”.
3. Now, you will want to add ALL of your DNS records to the newly created DNS Zone by clicking "add additional record" to add each new record. When you have added all of your records, Click “Confirm DNS Changes”. (click here for more information on indivual records)

### Step 4: Launch

This step is the moment of truth. Once you update the nameservers the process is started and your domain will point to the platformOS Instance, create and apply your SSL certificate and your platformOS DNS Hosted Zone records will be live. Our example uses Godaddy, so your domain registrar may be slightly different.

1. Update the nameservers in Godaddy and click “Save”.
2. Once the NameServers are recognized in Godaddy (usually takes a minut or two), click "I have changed Name Servers" on the platformOS DNS Zone page.
3. Depending on how quickly the nameserver changes propagate, (from a few minutes, to a few hours), you may have to  click 'I have changed Name Servers" a few times or refresh the page a few times. Do not be concerned if some of the records you created in the hosted zone fluctuate in the first minute or so after you update the nameservers. Once the Hosted Zone recognizes the change in nameservers, the status for all your records should be "OK". Your domain / DNS records and SSL certificate are all now LIVE.

### Step 5: To www or not to www (optional) 

If you want the final resolved URL to be https://www.example.com then you are all finished. 

If you decide that the root domain (https://example.com) is needed, follow along these last few steps below.

1. The defaul process described above creates a CNAME record for the www subdomain and also adds a redirect from the root to the www subdomain. We need to remove the redirect and add a new one from the www subdomain to the root domain. From the Domain page, click "Domains".
2. We will improve this shortly, but for now, in the URL that appears, remove the /pp_dns. Example, https://partners.platformos.com/Instances/5253/pp_dns/domains we would change to https://partners.platformos.com/Instances/5253/domains - From this page, we will remove the redirect from root to www, and add a redirect from www to root. Click 'Edit' on the root domain.
3. Make sure that "Use as default" is checked and that "redirect" is unchecked. Then click "Update Domain".
4. Next, click on "edit" for the www subdomain.
5. Finally, make sure 'Use as default' is unchecked and check "redirect". Add the direct URL to the root domain and then choose your redirect code. Once completed, click "Update Domain".

Congratulations! Your domain is now live and the SSL certificate has been created and applied to your Instance.


