import static spark.Spark.*;

public class Main {
    public static void main(String[] args) {
        staticFileLocation("/public");
        get("/", (request, response) -> {
            response.redirect("/index.html");
            return null;
        });
        get("/people", (request, response) -> {
            System.out.println("Cool Beans");
            response.type("application/json");
            return "{\n" +
                    "  \"people\": [\n" +
                    "    {\n" +
                    "      \"name\": \"Scott\",\n" +
                    "      \"city\": \"Minneapolis\"\n" +
                    "    },\n" +
                    "    {\n" +
                    "      \"name\":\"Koddie\",\n" +
                    "      \"city\":\"Huxley\"\n" +
                    "    },\n" +
                    "    {\n" +
                    "      \"name\":\"Ted\",\n" +
                    "      \"city\":\"Chicago\"\n" +
                    "    },\n" +
                    "    {\n" +
                    "      \"name\":\"Mark\",\n" +
                    "      \"city\":\"Cooperstown\"\n" +
                    "    },\n" +
                    "    {\n" +
                    "    \"name\":\"Joan\",\n" +
                    "    \"city\":\"Chicago\"\n" +
                    "    },\n" +
                    "    {\n" +
                    "      \"name\":\"Manny\",\n" +
                    "      \"city\":\"Santa Anna\"\n" +
                    "    },\n" +
                    "    {\n" +
                    "      \"name\":\"Lori\",\n" +
                    "      \"city\":\"Maramar\"\n" +
                    "    },\n" +
                    "    {\n" +
                    "      \"name\":\"Jake\",\n" +
                    "      \"city\":\"Saratoga Springs\"\n" +
                    "    },\n" +
                    "    {\n" +
                    "      \"name\":\"Zech\",\n" +
                    "      \"city\":\"Whitmore\"\n" +
                    "    },\n" +
                    "    {\n" +
                    "      \"name\":\"Kym\",\n" +
                    "      \"city\":\"Kailua-Kona\"\n" +
                    "    }\n" +
                    "  ]\n" +
                    "}";

    });
    }
}