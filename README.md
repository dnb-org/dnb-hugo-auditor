![repoimage](https://repository-images.githubusercontent.com/432989004/a3972d63-9610-4f0e-818f-24a0b5a401e6)<!--- CARD BEGIN --->

![DNB-Hugo/HEAD](.github/github-card-dark.png#gh-dark-mode-only)
![DNB-Hugo/HEAD](.github/github-card-light.png#gh-light-mode-only)

<!--- CARD END --->

# DNB GoHugo Component / Auditor

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
