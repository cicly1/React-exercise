import * as React from 'react';
import { MemberEntity } from '../../model/member';
import { memberAPI } from '../../api/memberAPI';
import { MemberRow } from './membersRow';
import { MemberHead } from './memberHead';
import {} from 'core-js';

interface Props {
}

// We define members as a state (the compoment holding this will be a container
// component)
interface State {
  members: Array<MemberEntity>,
  valor: string,
  }

// Nice tsx guide: https://github.com/Microsoft/TypeScript/wiki/JSX
export class MembersTableComponent extends React.Component<Props, State> {

  constructor(props: Props) {
    
    super(props);
    // set initial state
      this.state = { members: [],
        valor: '' };
        
      }
  

  loadMembers = () => {
    memberAPI.getAllMembers('lemoncode').then((members) =>
      this.setState({ members: members })
    );
  }

  loadMicrosoft = () => {
     memberAPI.getAllMembers('Microsoft').then((members) =>
      this.setState({ members: members })
    );
  }

  loadOtherMembers(event) {
      memberAPI.getAllMembers( event.target.value).then((members) =>
      this.setState({ members: members })
    );
  }

   
  public render() {
  
    return (
      <div className="row" >
        
        <h2> Ejercicio React</h2>
        <button onClick={this.loadMembers}>Load lemoncode</button>
        <br></br><br></br>
        <button onClick={this.loadMicrosoft}>Load Microsoft</button>
        <br></br><br></br>
       Input new organization: write and it will load automatically <input name='valor' onChange={event => this.loadOtherMembers(event)} />
        
        <table className="table"> 
          <thead>
            <MemberHead />
          </thead>
          <tbody>
            {
              
              this.state.members.map((member: MemberEntity) =>
                <MemberRow key={member.id} member={member} />
              )
            }
          </tbody>
        </table>
      </div>
    );
  }
}
