<?xml version="1.0" encoding="utf-8" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>MathML in HTML5</title>
            </head>
            <body>
                <xsl:for-each select="root/*">
                    <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
                        <xsl:apply-templates select="." />
                    </math>
                </xsl:for-each>
                <h4 id="author" title="GossJS">Станислав Катюшин</h4>
                <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
                <script id="MathJax-script" src="https://cdn.jsdelivr.net/npm/mathjax@3.0.1/es5/tex-mml-chtml.js"></script>
            </body>
        </html>
    </xsl:template>
    <xsl:template match="строка">
        <mrow>
            <xsl:for-each select="./*">
                <xsl:apply-templates select="." />
            </xsl:for-each>
        </mrow>
    </xsl:template>
    <xsl:template match="операнд">
        <mi>
            <xsl:value-of select="." />
        </mi>
    </xsl:template>
    <xsl:template match="оператор">
        <mo>
            <xsl:value-of select="." />
        </mo>
    </xsl:template>
    <xsl:template match="число">
        <mn>
            <xsl:value-of select="." />
        </mn>
    </xsl:template>
    <xsl:template match="корень">
        <msqrt>
            <xsl:for-each select="./*">
                <xsl:apply-templates select="." />
            </xsl:for-each>
        </msqrt>
    </xsl:template>
    <xsl:template match="дробь">
        <mfrac>
            <xsl:for-each select="./*">
                <xsl:apply-templates select="." />
            </xsl:for-each>
        </mfrac>
    </xsl:template>
    <xsl:template match="низверх">
        <munderover>
            <xsl:for-each select="./*">
                <xsl:apply-templates select="." />
            </xsl:for-each>
        </munderover>
    </xsl:template>
    <xsl:template match="верх">
        <msup>
            <xsl:for-each select="./*">
                <xsl:apply-templates select="." />
            </xsl:for-each>
        </msup>
    </xsl:template>
    <xsl:template match="низ">
        <msub>
            <xsl:for-each select="./*">
                <xsl:apply-templates select="." />
            </xsl:for-each>
        </msub>
    </xsl:template>
</xsl:stylesheet>