export default `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable>response</variable>
  </variables>
  <block type="s4d_login" x="514" y="214">
    <value name="TOKEN">
      <block type="text">
        <field name="TEXT">Your bot token</field>
      </block>
    </value>
  </block>
  <block type="s4d_on_message" x="517" y="297">
    <statement name="STATEMENTS">
      <block type="controls_if">
        <value name="IF0">
          <block type="logic_compare">
            <field name="OP">EQ</field>
            <value name="A">
              <block type="s4d_message_content"></block>
            </value>
            <value name="B">
              <block type="text">
                <field name="TEXT">!random</field>
              </block>
            </value>
          </block>
        </value>
        <statement name="DO0">
          <block type="variables_set">
            <field name="VAR">response</field>
            <value name="VALUE">
              <block type="lists_create_with">
                <mutation items="3"></mutation>
                <value name="ADD0">
                  <block type="text">
                    <field name="TEXT">Response 1</field>
                  </block>
                </value>
                <value name="ADD1">
                  <block type="text">
                    <field name="TEXT">Response 2</field>
                  </block>
                </value>
                <value name="ADD2">
                  <block type="text">
                    <field name="TEXT">Response 3</field>
                  </block>
                </value>
              </block>
            </value>
            <next>
              <block type="s4d_reply">
                <value name="CONTENT">
                  <shadow type="text">
                    <field name="TEXT">Hey!</field>
                  </shadow>
                  <block type="lists_getIndex">
                    <mutation statement="false" at="false"></mutation>
                    <field name="MODE">GET</field>
                    <field name="WHERE">RANDOM</field>
                    <value name="VALUE">
                      <block type="variables_get">
                        <field name="VAR">response</field>
                      </block>
                    </value>
                  </block>
                </value>
              </block>
            </next>
          </block>
        </statement>
      </block>
    </statement>
  </block>
</xml>`;
