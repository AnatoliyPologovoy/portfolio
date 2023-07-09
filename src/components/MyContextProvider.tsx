import React, {FC, ReactNode} from "react";
import {content, ContentType} from "app/Content";

type MyProviderPropsType = {
		children: ReactNode
		value: ContentType
}
export const MyContext = React.createContext<ContentType>(content)

export const MyProvider: FC<MyProviderPropsType> = ({children}) => {
		return (
				<MyContext.Provider value={content}>
						{children}
				</MyContext.Provider>
		)
}

