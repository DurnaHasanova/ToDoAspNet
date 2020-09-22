using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToDoAsp.Net.Models;

namespace ToDoAsp.Net.Services
{
	 public interface IService
	{

		List<ToDo> GetAll();

		void Delete(int id);
		void Add(ToDo todo);

		void Edit(ToDo toDo);
		ToDo GetByID(int id);
		void UpdateDoneStatus(List<ToDo> todo);


	}
}
