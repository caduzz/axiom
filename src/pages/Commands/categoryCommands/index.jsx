import { BsSearch } from "react-icons/bs"
import { Input } from "../../../components/Input"

import { List } from "./style"

export const CategoryCommands = ({click, searsh, types, selected}) => {
    return(
        <List>
          <div className="contentCategoryListCommands">
            <Input 
              placeholder="Category" 
              change={searsh} 
              icon={<BsSearch size={16} fontWeight={600}/>} 
            />
            <ul className="listCategoryCommands">
              {types.map((type, index) =>
                <button
                  onClick={()=>{type.name !== selected && click(type.name)}}
                  style={{
                    backgroundColor: selected === type.name && '#111214',
                    color: selected === type.name && '#fff'
                  }}
                  key={index}
                >
                 <p className="iconArea">{type.icon}{type.name}</p> <span>{type.count}</span>
                </button>
              )}
            </ul>
          </div>
        </List>
    )
}