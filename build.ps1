$ErrorActionPreference = 'Stop'
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

function Read-Utf8($path) { [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8) }
function Write-Utf8($path, $text) { [System.IO.File]::WriteAllText($path, $text, [System.Text.UTF8Encoding]::new($false)) }

function Fix-Body($html) {
    $html = $html -replace 'href="#home"', 'href="index.html"'
    $html = $html -replace 'href="#services"', 'href="services.html"'
    $html = $html -replace 'href="#about"', 'href="about.html"'
    $html = $html -replace 'href="#contact"', 'href="contact.html"'
    $html = $html -replace '\s*data-page="[^"]*"', ''
    $html = $html -replace 'class="section" style="padding-top:120px;"', 'class="section page-inner"'
    $html = $html -replace 'class="section contact" style="padding-top:120px;"', 'class="section contact page-inner"'
    $html = $html -replace 'style="display:grid;grid-template-columns:1fr 300px;gap:30px;"', 'class="services-layout"'
    return $html.Trim()
}

function Set-Active($header, $active) {
    $keys = @('HOME','SERVICES','KOMBI','ABOUT','CONTACT')
    foreach ($k in $keys) {
        $val = if ($k -eq $active) { 'active' } else { '' }
        $header = $header -replace "\{\{ACTIVE_$k\}\}", $val
    }
    return $header
}

function Build-One($cfg) {
    $head = Read-Utf8 '_inc\head.html'
    $header = Read-Utf8 '_inc\header.html'
    $keywords = Read-Utf8 '_inc\keywords.html'
    $footer = Read-Utf8 '_inc\footer.html'

    $head = $head -replace '\{\{TITLE\}\}', $cfg.title
    $head = $head -replace '\{\{DESCRIPTION\}\}', $cfg.description
    $head = $head -replace '\{\{KEYWORDS\}\}', $cfg.keywords
    $head = $head -replace '\{\{CANONICAL\}\}', $cfg.canonical
    $head = $head -replace '\{\{CANONICAL_AZ\}\}', $cfg.canonicalAz
    $head = $head -replace '\{\{EXTRA_HEAD\}\}', $(if ($cfg.extraHead) { $cfg.extraHead } else { '' })

    $header = Set-Active $header $cfg.active
    $keywords = $keywords -replace '\{\{KEYWORDS_PAGE\}\}', $cfg.kwPage

    $body = if ($cfg.bodyFile) { Fix-Body (Read-Utf8 $cfg.bodyFile) } else { $cfg.body }

    $out = $head + "`n" + $header + "`n    <main role=`"main`">`n" + $body + "`n    </main>`n" + $keywords + "`n" + $footer + "`n</body>`n</html>"
    Write-Utf8 $cfg.out $out
    Write-Output "OK $($cfg.out)"
}

$meta = Get-Content 'pages-meta.json' -Raw -Encoding UTF8 | ConvertFrom-Json

$kombiMeta = '<script src="page-meta-kombi.js" defer></script>'

$kombiBody = Read-Utf8 'kombi-body.html'

@(
    @{ out='index.html'; active='HOME'; kwPage='home'; bodyFile='_page_home.html'; metaKey='index'
       canonical='https://aliservis.az/'; canonicalAz='https://aliservis.az/?lang=az' },
    @{ out='services.html'; active='SERVICES'; kwPage='services'; bodyFile='_page_services.html'; metaKey='services'
       canonical='https://aliservis.az/services.html'; canonicalAz='https://aliservis.az/services.html?lang=az' },
    @{ out='about.html'; active='ABOUT'; kwPage='about'; bodyFile='_page_about.html'; metaKey='about'
       canonical='https://aliservis.az/about.html'; canonicalAz='https://aliservis.az/about.html?lang=az' },
    @{ out='contact.html'; active='CONTACT'; kwPage='contact'; bodyFile='_page_contact.html'; metaKey='contact'
       canonical='https://aliservis.az/contact.html'; canonicalAz='https://aliservis.az/contact.html?lang=az' },
    @{ out='kombi-servisi.html'; active='KOMBI'; kwPage='kombi'; body=$kombiBody; metaKey='kombi'
       canonical='https://aliservis.az/kombi-servisi.html'; canonicalAz='https://aliservis.az/kombi-servisi.html?lang=az'
       extraHead=$kombiMeta }
) | ForEach-Object {
    $m = $meta.($_.metaKey)
    $_ | Add-Member -NotePropertyName title -NotePropertyValue $m.title -Force
    $_ | Add-Member -NotePropertyName description -NotePropertyValue $m.description -Force
    $_ | Add-Member -NotePropertyName keywords -NotePropertyValue $m.keywords -Force
    Build-One $_
}

Write-Output 'Build complete.'
