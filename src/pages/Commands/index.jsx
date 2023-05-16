import { CommandsMain } from "./style";

import { useState } from "react";

import { botinfos } from "../../services/commands";

import { NavBar } from "../../components/NavBar";
import { TableCommands } from "./tableCommands";
import { CategoryCommands } from "./categoryCommands";

function Commands() {
  const [type, setType] = useState('info')
  const [searshType, setSearshType] = useState('')
  const [searshCommand, setSearshCommand] = useState('')

  console.log('Rodou')

  const commandFilter = searshCommand.length > 0
    ? botinfos.commands.data.filter(command => command.name.includes(searshCommand)).filter(command => command.type === type)
    : botinfos.commands.data.filter(command => command.type === type)
  const typeFilter = searshType.length > 0
    ? botinfos.commands.type.filter(command => command.name.includes(searshType))
    : botinfos.commands.type

  return (
    <CommandsMain>
      <NavBar/>
      <div className="tilte">
        <h1>Commands</h1>
        <p>List commands category</p>
      </div>
      <div className="container">
        <CategoryCommands click={setType} searsh={setSearshType} types={typeFilter} selected={type}/>
        <TableCommands data={commandFilter} searsh={setSearshCommand} />
      </div>
    </CommandsMain>
  );
}

export default Commands;
