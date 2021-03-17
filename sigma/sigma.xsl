<?xml version="1.0" encoding="utf-8" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match = "/">
        <!-- HTML tags 
         Used for formatting purpose. Processor will skip them and browser 
            will simply render them. 
      -->
        <html>
            <body>
                <h2>Students</h2>
                <table border = "1">
                    <tr bgcolor = "#9acd32">
                        <th>Roll No</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Nick Name</th>
                        <th>Marks</th>
                    </tr>
                </table>
            </body>
        </html>
    </xsl:template>
    <xsl:stylesheet>