const expect = require("expect");

const {generateMessage} = require("./message");

describe('generateMessage',()=>{
    it('should generate correct message object',()=>{
        const from = 'akram';
        const text = 'some message';
        const message = generateMessage(from,text);
        console.log("message",message);
        

        expect(typeof message.createdAt).toBe('object');
        expect(message).toMatchObject({from,text});
    });
});