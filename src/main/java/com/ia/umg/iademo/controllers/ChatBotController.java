package com.ia.umg.iademo.controllers;

import java.io.File;
import java.util.logging.Logger;

import org.alicebot.ab.Bot;
import org.alicebot.ab.Chat;
import org.alicebot.ab.History;
import org.alicebot.ab.MagicBooleans;
import org.alicebot.ab.MagicStrings;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ChatBotController {
	
	private static final boolean TRACE_MODE = false;

	
	 String response = null;
	 String resourcesPath = getResourcesPath();
		Bot bot = new Bot("super", resourcesPath);
		Chat chatSession = new Chat(bot);
		
	 @PostMapping(value = "/chatbot") 
	public String ChatBot (@RequestParam(value="request", required=true) String request) {
			MagicBooleans.trace_mode = TRACE_MODE;
			bot.brain.nodeStats();

			if ((request == null) || (request.length() < 1)) {
				request = MagicStrings.null_input;
				response = "null";
			
	 }else {
		
				if (MagicBooleans.trace_mode)
					System.out.println("STATE=" + request + ":THAT=" + ((History) chatSession.thatHistory.get(0)).get(0) + ":TOPIC=" + chatSession.predicates.get("topic"));
				 response = chatSession.multisentenceRespond(request);
				while (response.contains("&lt;"))
					response = response.replace("&lt;", "");
				while (response.contains("&gt;"))
					response = response.replace("&gt;", ""); 
				System.out.println(response); 

			}

		return response;

	}	private static String getResourcesPath() {
		File currDir = new File(".");
		String path = currDir.getAbsolutePath();
		path = path.substring(0, path.length() - 2);
		System.out.println(path);
		String resourcesPath = path + File.separator + "src" + File.separator + "main" + File.separator + "resources";
		return resourcesPath;
	}
	 
	
	

}
