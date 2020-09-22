using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToDoAsp.Net.Models;

namespace ToDoAsp.Net.Services
{
	public class TodoService : IService
	{

		private static List<ToDo> toDos = new List<ToDo>()
		{
			new ToDo() {Id=1, Title="Meeting at 3 pm", IsDone=true },
			new ToDo() {Id=2, Title="Call to doctor", IsDone=false },
			new ToDo() {Id=3, Title="Go to market", IsDone=true },

		};

		public void Add(ToDo todo)
		{
			int Id = 1;
			if (toDos.Count > 0)
			{
			Id = toDos.Max(i => i.Id) + 1;

			}
			todo.Id = Id;
			toDos.Add(todo);
		}

		public void Delete(int id)
		{
			var data = toDos.FirstOrDefault(i => i.Id == id);
			toDos.Remove(data);
		}

		public void Edit(ToDo toDo)
		{
			var data = toDos.FirstOrDefault(i => i.Id == toDo.Id);
			data.IsDone = toDo.IsDone;
			data.Title = toDo.Title;
		}

		public List<ToDo> GetAll()
		{
			return toDos;
		}
		public ToDo GetByID(int id)
		{
			return toDos.FirstOrDefault(i=>i.Id==id);
		}

		public void UpdateDoneStatus(List<ToDo> todo)
		{
			foreach (var item in todo) {
				Edit(item);
			}
		}
	}
}
