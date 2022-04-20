<!--- CARD BEGIN --->

![DNB-Hugo/AUDITOR](.github/github-card-dark.png#gh-dark-mode-only)
![DNB-Hugo/AUDITOR](.github/github-card-light.png#gh-light-mode-only)

<!--- CARD END --->

# GoHugo Component / Auditor

This module is a GoHugo component that adds several auditing tools to your development website. It is work in progress, check back when v1 is released for a fixed feature set.

## Headers CT

See [CT.css](https://github.com/csswizardry/ct) for details. Enable this feature only on development setup to see information about optimisation approaches for your header tag order.

```toml
[params.dnb.auditor]
ct = true

```

then add somewhere in the foooter of your base template:

```gotemplate
{{- partialCached "ct/ct.html" . -}}
```

## Add links.json with a list of all created URLs

Add output type to `outputs` section in your config:

```toml
home = [..., "dnblinklist" ]
```

After creation of the site there is a JSON file available at `/links.json` containing all created links.
