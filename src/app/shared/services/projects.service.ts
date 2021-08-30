import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  url="http://localhost:8090/myapp/projects"
  url1="http://localhost:8090/myapp/projects/"
    password = "nadhmi";
    username ="bacnadhmi2017"
    constructor(private http:HttpClient) { }
  
    public  getProjects()
    { const headers =new HttpHeaders({Authorization:'Basic'+btoa(this.username+":"+this.password)})
      return this.http.get(this.url,{headers});
    }
    public getProjectsById(id:any)
   {const headers =new HttpHeaders({Authorization:'Basic'+btoa(this.username+":"+this.password)})
    return this.http.get(this.url1+id,{headers});
   }
   getProjectByIDMemberships(id:any)
   {const headers =new HttpHeaders({Authorization:'Basic'+btoa(this.username+":"+this.password)})
    return this.http.get("http://localhost:8090/myapp/projects/"+id+"/memberships",{headers});
   }
   getuserByID(id:any)
   {const headers =new HttpHeaders({Authorization:'Basic'+btoa(this.username+":"+this.password)})
    return this.http.get("http://localhost:8090/myapp/users/"+id,{headers});
   }
   getIssues()
    { const headers =new HttpHeaders({Authorization:'Basic'+btoa(this.username+":"+this.password)})
      return this.http.get("http://localhost:8090/myapp/issues",{headers});
    }
    getusers( )
   { const headers =new HttpHeaders({Authorization:'Basic'+btoa(this.username+":"+this.password)})
    return this.http.get("http://localhost:8090/myapp/users" ,{headers});
   }
   getAllTrackers( )
   {const headers =new HttpHeaders({Authorization:'Basic'+btoa(this.username+":"+this.password)})
    return this.http.get(" http://localhost:8090/myapp/trackers",{headers});
   }
  }
