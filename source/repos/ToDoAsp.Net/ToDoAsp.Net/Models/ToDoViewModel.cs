using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ToDoAsp.Net.Models
{
	public class ToDoViewModel
	{
		public List<ToDo> ToDos { get; set; }

		public ToDo Todo { get; set; }

		public int DeleteItemId { get; set; }
		public int EditItemId { get; set; }

		public ToDoViewModel()
		{

			Todo = new ToDo();
		}
	}
}
