import React, { useState } from "react";
import AgentList from "./AgentList";
import AgentSkill from "./AgentSkill.jsx";
import { agentData } from "../../assets/api/agentData";

const AgentInfo = () => {
  const [selectAgent, setSelectAgent] = useState(agentData[0]);
  return (
    <>
      <AgentList selectAgent={selectAgent} onAgentSelect={setSelectAgent} />
      <AgentSkill selectAgent={selectAgent} />
    </>
  );
};

export default AgentInfo;
