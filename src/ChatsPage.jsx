import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced";

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('ae34a178-9188-4943-966a-11530b5bc0b7', props.user.username, props.user.secret);
    return (
        <div style={{height: '100vh'}}>
        <MultiChatSocket {...chatProps} ></MultiChatSocket>
        <MultiChatWindow {...chatProps}  style={{height: '100%'}}></MultiChatWindow>
    </div>
    );
};

export default ChatsPage;