<?xml version="1.0" encoding="utf-8" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>MathML from XML</title>
            </head>
            <body>
                <xsl:for-each select="root/*">
                    <xsl:apply-templates select="." />
                </xsl:for-each>
                <h4 id="author" title="GossJS">Станислав Катюшин</h4>
            </body>
        </html>
    </xsl:template>
    <xsl:template match="графика">
        <svg width="{@ширина}" height="{@высота}">
            <xsl:for-each select="./*">
                <xsl:apply-templates select="." />
            </xsl:for-each>
        </svg>
    </xsl:template>
    <xsl:template match="эллипс">
        <ellipse id="{@id}" fill="{@заливка}" stroke="{@ободок}" stroke-width="{@ширина-ободка}" cx="{@cx}" cy="{@cy}" rx="{@rx}" ry="{@ry}" />
    </xsl:template>
</xsl:stylesheet>