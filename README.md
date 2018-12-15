# React-exercise
Ejercicio React
Se ha hecho lo siguiente:

En el archivo memberTable.tsx
- Se cargan lemoncode -> ya hecho
- Se cargan Microsoft 

	  loadMicrosoft = () => {
	     memberAPI.getAllMembers('Microsoft').then((members) =>
	      this.setState({ members: members })
	    );
	  }

	  <button onClick={this.loadMicrosoft}>Load Microsoft</button>

- Según se va escribiendo en el input se van cargando los miembros.

  se crea un nueva funcion donde se recoge el input y el valor

	  loadOtherMembers(event) {
	      memberAPI.getAllMembers( event.target.value).then((members) =>
	      this.setState({ members: members })
	    );
	  }

  y se van cargando según escribe el usuario
  		
		Input new organization: write and it will load automatically <input name='valor' 
	 	onChange={event => this.loadOtherMembers(event)} />
