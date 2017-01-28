module.exports = function(RED) {

    function AlexaOut(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        // Retrieve the config node
        node.server = RED.nodes.getNode(config.server);

        if(this.server)
            console.log("Server Available.");
        else
            console.log("No Server.");

        // code here
    }

    RED.nodes.registerType("Alexa-Out", AlexaOut);
};