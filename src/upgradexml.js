const TypeToField = {
  frost_floppa: 'https://c.tenor.com/VcR3cl_TNQsAAAAM/big-floppa-mad-floppa.gif',
  s4d_fart: 'https://c.tenor.com/UVAk99QaOTsAAAAC/fart-experiment.gif',
  jg_banana: 'banana 🍌',
  s4d_bot_ping: 'pings',
  s4d_bot_server_count: 'servers',
  s4d_pin: 'PIN',
  s4d_unpin: 'UNPIN',
  s4d_boost_level: 'BOOST_LEVEL',
  s4d_icon_url: 'ICON_URL',
  set_verification_level: 'NAME',
  explicit_content_filter: 'NAME',
  default_notif_lvl: 'NAME',
  s4d_mentioned_member: 'members',
  s4d_mentioned_channel: 'channels',
  s4d_mentioned_role: 'roles',
  reply_mentioned_member: 'members',
  reply_mentioned_channel: 'channels',
  reply_mentioned_role: 'roles'
};
const UpgradeField = {
  set_verification_level: {
    NONE: 'None',
    LOW: 'Low',
    MEDIUM: 'Medium',
    HIGH: 'High',
    VERY_HIGH: 'VeryHigh'
  },
  explicit_content_filter: {
    DISABLED: 'Disabled',
    MEMBERS_WITHOUT_ROLES: 'MembersWithoutRoles',
    ALL_MEMBERS: 'AllMembers'
  },
  default_notif_lvl: {
    ALL_MESSAGES: 'AllMessages',
    ONLY_MENTIONS: 'OnlyMentions'
  }
};

export default function upgradeXml(xml) {
  // Vanish from existance
  xml.querySelectorAll('block[type="jg_tests_hfi87ewiugkjbo83q2yfoheiefop432ug_gorpjgrejgo_dietznut_jblock_api_test_mapoapoowip"]').forEach((block) => {
    block.remove();
  });
  // Image embed blocks
  xml.querySelectorAll('block[type="frost_floppa"],block[type="s4d_fart"]').forEach((block) => {
    let orig = block.getAttribute('type');
    block.setAttribute('type', 's4d_embed_create');
    block.innerHTML = `<field name="NAME">embed</field>
<statement name="THEN">
  <block type="s4d_embed_set_image">
    <value name="IMAGE">
      <shadow type="text">
        <field name="TEXT">${TypeToField[orig]}</field>
      </shadow>
    </value>
  </block>
</statement>
<next>
  <block type="s4d_reply">
    <value name="CONTENT">
      <shadow type="text">
        <field name="TEXT">Hey!</field>
      </shadow>
      <block type="s4d_embed_send">
        <field name="NAME">embed</field>
      </block>
    </value>
    ${block.innerHTML}
  </block>
</next>`;
  });
  // Send blocks
  xml.querySelectorAll('block[type="jg_banana"]').forEach((block) => {
    let orig = block.getAttribute('type');
    block.setAttribute('type', 's4d_reply');
    block.innerHTML = `<value name="CONTENT">
  <shadow type="text">
    <field name="TEXT">${TypeToField[orig]}</field>
  </shadow>
</value>`;
  });
  // Old json db
  let hasOldJSONDB = false;
  xml.querySelectorAll('block[type="s4d_has_data"],block[type="s4d_get_data"],block[type="s4d_get_all_data"],block[type="s4d_set_data"],block[type="s4d_subtract_data"],block[type="s4d_delete_data"],block[type="s4d_delete_all_data"],block[type="s4d_add_data"]').forEach((block) => {
    hasOldJSONDB = true;
    let orig = block.getAttribute('type');
    block.setAttribute('type', orig + '_new');
    block.insertAdjacentHTML(
      'beforeend',
      `<value name="NAME">
  <block type="jg_text_remake_paragraph_quotes">
    <field name="TEXT">__S4D__Old_JSON_DB</field>
  </block>
</value>`
    );
  });
  if (hasOldJSONDB) {
    xml.insertAdjacentHTML(
      'beforeend',
      `<block type="s4d_database_create_new">
  <value name="NAME">
    <shadow type="text">
      <field name="TEXT">__S4D__Old_JSON_DB</field>
    </shadow>
  </value>
  <value name="FILE">
    <shadow type="text">
      <field name="TEXT">database</field>
    </shadow>
  </value>
</block>`
    );
  }
  // Old stat blocks
  xml.querySelectorAll('block[type="s4d_bot_server_count"],block[type="s4d_bot_ping"]').forEach((block) => {
    let orig = block.getAttribute('type');
    block.setAttribute('type', 's4d_bot_amount');
    block.insertAdjacentHTML('beforeend', `<field name="T">${TypeToField[orig]}</field>`);
  });
  // Flexible pins
  xml.querySelectorAll('block[type="s4d_pin"],block[type="s4d_unpin"]').forEach((block) => {
    let orig = block.getAttribute('type');
    block.setAttribute('type', 'lime_s4d_pin');
    block.insertAdjacentHTML('beforeend', `<field name="choise">${TypeToField[orig]}</field>`);
  });
  // Compact server
  xml.querySelectorAll('block[type="s4d_boost_level"],block[type="s4d_icon_url"]').forEach((block) => {
    let orig = block.getAttribute('type');
    block.setAttribute('type', 'server_attributes');
    block.insertAdjacentHTML('beforeend', `<field name="attributes">${TypeToField[orig]}</field>`);
  });
  // Typing
  xml.querySelectorAll('block[type="jg_typing"]').forEach((block) => {
    block.setAttribute('type', 'jg_typingChannel');
    block.insertAdjacentHTML(
      'beforeend',
      `<value name="CHANNEL">
  <block type="s4d_message_channel"></block>
</value>`
    );
  });
  // Flexible mentioned
  xml.querySelectorAll('block[type="s4d_mentioned_member"],block[type="s4d_mentioned_channel"],block[type="s4d_mentioned_role"],block[type="reply_mentioned_member"],block[type="reply_mentioned_channel"],block[type="reply_mentioned_role"]').forEach((block) => {
    let orig = block.getAttribute('type');
    block.setAttribute('type', 'jg_message_mentioned_member_number_on_message');
    block.insertAdjacentHTML(
      'beforeend',
      `<field name="TYPE">${TypeToField[orig]}</field>
<value name="INDEX">
  <shadow type="math_number">
    <field name="NUM">1</field>
  </shadow>
</value>
<value name="MESSAGE">
  <shadow type="${orig.startsWith('reply_')?'reply_m':'M'}essage"/>
</value>`
    );
  });
  // To v14
  xml.querySelectorAll('block[type="set_verification_level"],block[type="explicit_content_filter"],block[type="default_notif_lvl"]').forEach((block) => {
    let field = block.querySelector(`field[name="${TypeToField[block.getAttribute('type')]}"]`);
    field.innerHTML = UpgradeField[block.getAttribute('type')][field.innerHTML];
  });

  return xml;
}
