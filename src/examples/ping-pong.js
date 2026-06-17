export default `<xml xmlns="https://developers.google.com/blockly/xml">
        <block type="s4d_login" x="288" y="163">
            <value name="TOKEN">
                <block type="text">
                    <field name="TEXT">Your bot token</field>
                </block>
            </value>
        </block>
        <block type="s4d_on_message" x="288" y="238">
            <statement name="STATEMENTS">
                <block type="controls_if">
                    <value name="IF0">
                        <block type="logic_compare">
                            <field name="OP">EQ</field>
                            <value name="A">
                                <block type="s4d_message_content" />
                            </value>
                            <value name="B">
                                <block type="text">
                                    <field name="TEXT">!ping</field>
                                </block>
                            </value>
                        </block>
                    </value>
                    <statement name="DO0">
                        <block type="s4d_reply">
                            <value name="CONTENT">
                                <block type="text">
                                    <field name="TEXT">pong!</field>
                                </block>
                            </value>
                        </block>
                    </statement>
                </block>
            </statement>
        </block>
    </xml>`;
