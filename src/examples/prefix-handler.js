export default `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable>arguments</variable>
    <variable>prefix</variable>
    <variable>commandwithprefix</variable>
    <variable>command</variable>
  </variables>
  <block type="s4d_login" x="0" y="0">
    <value name="TOKEN">
      <block type="text">
        <field name="TEXT">Your bot token</field>
      </block>
    </value>
  </block>
  <block type="s4d_on_connected" x="0" y="104">
    <statement name="STATEMENTS">
      <block type="variables_set">
        <field name="VAR">prefix</field>
        <value name="VALUE">
          <block type="text">
            <field name="TEXT">!</field>
          </block>
        </value>
      </block>
    </statement>
  </block>
  <block type="s4d_on_message" x="0" y="280">
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
            <field name="VAR">commandwithprefix</field>
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
                  <block type="s4d_starts_with">
                    <value name="STRING">
                      <shadow type="text">
                        <field name="TEXT">abc</field>
                      </shadow>
                      <block type="variables_get">
                        <field name="VAR">commandwithprefix</field>
                      </block>
                    </value>
                    <value name="SUBSTRING">
                      <shadow type="text">
                        <field name="TEXT">a</field>
                      </shadow>
                      <block type="variables_get">
                        <field name="VAR">prefix</field>
                      </block>
                    </value>
                  </block>
                </value>
                <statement name="DO0">
                  <block type="variables_set">
                    <field name="VAR">command</field>
                    <value name="VALUE">
                      <block type="text_getSubstring">
                        <mutation at1="true" at2="false"></mutation>
                        <field name="WHERE1">FROM_START</field>
                        <field name="WHERE2">LAST</field>
                        <value name="STRING">
                          <block type="variables_get">
                            <field name="VAR">commandwithprefix</field>
                          </block>
                        </value>
                        <value name="AT1">
                          <block type="math_arithmetic">
                            <field name="OP">ADD</field>
                            <value name="A">
                              <shadow type="math_number">
                                <field name="NUM">1</field>
                              </shadow>
                              <block type="text_length">
                                <value name="VALUE">
                                  <shadow type="text">
                                    <field name="TEXT">abc</field>
                                  </shadow>
                                  <block type="variables_get">
                                    <field name="VAR">prefix</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <value name="B">
                              <shadow type="math_number">
                                <field name="NUM">1</field>
                              </shadow>
                            </value>
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
                                <field name="TEXT">say</field>
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
                </statement>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
  </block>
</xml>`;
