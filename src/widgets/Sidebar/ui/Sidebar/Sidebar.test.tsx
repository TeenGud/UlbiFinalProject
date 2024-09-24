import { fireEvent, screen } from "@testing-library/react"
import { Sidebar } from "./Sidebar"
import { withTranslation } from "react-i18next";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";

describe("Sidebar", () => {
    test("test 1", () => {
        const SidebarWithTranslation = withTranslation('ns')(Sidebar);
        renderWithTranslation(<SidebarWithTranslation />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    // test("test toggle", () => {
    //     const SidebarWithTranslation = withTranslation('ns')(Sidebar);
    //     renderWithTranslation(<SidebarWithTranslation />)
    //     const toggleBtn = screen.getByTestId('sidebar-toggle')
    //     expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    //     fireEvent.click(toggleBtn)
    //     expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    // })
})