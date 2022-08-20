import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    try {
      const updatedUser = this.turnUserAdminUseCase.execute({ user_id });
      return response.status(201).json(updatedUser);
    } catch (Error) {
      return response.status(404).json({ error: Error.message });
    }
  }
}

export { TurnUserAdminController };
