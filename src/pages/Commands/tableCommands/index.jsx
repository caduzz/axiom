import { BsSearch } from "react-icons/bs"
import { Input } from "../../../components/Input"
import { CommandsView, Prompt, Table } from "./style"

export const TableCommands = ({data, searsh}) => {
    return(
      <CommandsView>
        <Input 
          placeholder="Commands"
          icon={<BsSearch size={16} fontWeight={600}/>} 
          change={searsh}
        />
        <Table>
          <thead className="headerCommand">
            <tr className="headerColumnCommand">
              <th className="headerLineCommand">Command</th>
              <th className="headerLineCommand">Status</th>
              <th className="headerLineCommand">Description</th>
            </tr>
          </thead>
          {data.length !== 0 ?
            <tbody className="bodyCommand">
              {data.map((commands, index) => (
                <tr key={index} className="bodyColumnCommand">
                  <td className="bodyLineCommand"><span className="command">/{commands.name}</span></td>
                  <td className="bodyLineCommand">
                    <Prompt status={commands.status}>{commands.status === 'on' ? 'online' : 'offline'}</Prompt>
                  </td>

                  <td className="bodyLineCommand">{commands.description}</td>
                </tr>
              ))}
            </tbody>
            :
            <div className="alertMessage">
              <p>não tem comandos</p>
            </div>
          } 
        </Table>
      </CommandsView>
    )
}