export default `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable>arguments</variable>
    <variable>command</variable>
  </variables>
  <block type="s4d_login" x="62" y="12">
    <value name="TOKEN">
      <block type="text">
      <field name="TEXT">Your bot token</field>
      </block>
    </value>
  </block>
  <block type="s4d_on_message" x="62" y="112">
    <statement name="STATEMENTS">
      <block type="variables_set">
      <field name="VAR">arguments</field>
      <value name="VALUE">
        <block type="lists_split">
        <mutation mode="SPLIT"></mutation>
        <field name="MODE">SPLIT</field>
        <value name="INPUT">
          <block type="s4d_message_content"></block>
        </value>
        <value name="DELIM">
          <shadow type="text">
          <field name="TEXT"> </field>
          </shadow>
        </value>
        </block>
      </value>
      <next>
        <block type="variables_set">
        <field name="VAR">command</field>
        <value name="VALUE">
          <block type="lists_getIndex">
          <mutation statement="false" at="true"></mutation>
          <field name="MODE">GET_REMOVE</field>
          <field name="WHERE">FROM_START</field>
          <value name="VALUE">
            <block type="variables_get">
            <field name="VAR">arguments</field>
            </block>
          </value>
          <value name="AT">
            <block type="math_number">
            <field name="NUM">1</field>
            </block>
          </value>
          </block>
        </value>
        <next>
          <block type="controls_if">
          <value name="IF0">
            <block type="logic_compare">
            <field name="OP">EQ</field>
            <value name="A">
              <block type="variables_get">
              <field name="VAR">command</field>
              </block>
            </value>
            <value name="B">
              <block type="text">
              <field name="TEXT">!say</field>
              </block>
            </value>
            </block>
          </value>
          <statement name="DO0">
            <block type="s4d_reply">
            <value name="CONTENT">
              <shadow type="text">
              <field name="TEXT">You have written the following content after !say:</field>
              </shadow>
            </value>
            <next>
              <block type="s4d_reply">
              <value name="CONTENT">
                <shadow type="text">
                <field name="TEXT">Salut!</field>
                </shadow>
                <block type="lists_split">
                <mutation mode="JOIN"></mutation>
                <field name="MODE">JOIN</field>
                <value name="INPUT">
                  <block type="variables_get">
                  <field name="VAR">arguments</field>
                  </block>
                </value>
                <value name="DELIM">
                  <shadow type="text">
                  <field name="TEXT"> </field>
                  </shadow>
                </value>
                </block>
              </value>
              </block>
            </next>
            </block>
          </statement>
          </block>
        </next>
        </block>
      </next>
      </block>
    </statement>
  </block>
</xml>`;
