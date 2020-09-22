using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToDoAsp.Net.Models;
using ToDoAsp.Net.Services;

namespace ToDoAsp.Net.Controllers
{
	public class TodoController :Controller
	{
		private readonly IService todoService;

		public TodoController(IService todoService)
		{
			this.todoService = todoService;
		}


		public IActionResult ToDoHome()
		{
			ToDoViewModel viewModel = new ToDoViewModel()
			{
				ToDos = todoService.GetAll()
			};
			 

			return View(viewModel);
		}

		[HttpPost]
		public IActionResult Add(ToDoViewModel model)
		{

			ToDo toDo = new ToDo()
			{
				Title = model.Todo.Title,
				IsDone = model.Todo.IsDone
			};

			todoService.Add(toDo);
			return RedirectToAction("ToDoHome");
		}


		[HttpGet]
		public IActionResult Delete(int id)
		{
			todoService.Delete(id);
			return RedirectToAction("ToDoHome");
		}
		[HttpPost]
		public IActionResult Edit(ToDoViewModel model)
		{
			//todoService.Edit(model.Todo);
			todoService.Edit(model.Todo);
			return RedirectToAction("ToDoHome");
		}
		[HttpPost]
		public IActionResult ChangeStatus(List<ToDo> Todo)
		{

			todoService.UpdateDoneStatus(Todo);
			return RedirectToAction("ToDoHome");
		}
	}
}
